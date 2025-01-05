import React, {useEffect, useRef, useState} from "react";
interface Observer {
    update(data: string): void;
}

interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

class ObservableClock implements Subject {
    private observers: Observer[] = [];
    private currentTime: string = "";

    constructor() {
        this.startClock();
    }
    private startClock(): void {
        setInterval(() => {
            const now = new Date();
            this.currentTime = now.toLocaleTimeString();
            this.notifyObservers();
        }, 200); // Opdater hver sekund (1000 millisekunder)
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.currentTime));
    }
}

const ClockDisplay: React.FC<{ observable: ObservableClock }> = ({ observable }) => {
    const [time, setTime] = useState("Not subscribed");
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const observer: Observer = {
            update: (data: string) => setTime(data), // Opdaterer tiden i UI
        };
        if (isSubscribed) {
            observable.addObserver(observer);
        } else {
            observable.removeObserver(observer);
        }
        // Ryd op ved unmount
        return () => {
            observable.removeObserver(observer);
        };

    }, [isSubscribed, observable]);

    const toggleSubscription = () => {
        setIsSubscribed((prev) => !prev);
    }
    return (
        <div className={"center"}>
            <p>{time}</p>
            <button
                onClick={toggleSubscription}>
                {isSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
        </div>
    )
}
const Clock: React.FC = () => {
    const observableClock = useRef(new ObservableClock()).current;
    return (
        <div className={"center"}>
            <ClockDisplay observable={observableClock} />
        </div>
    );
}

export default Clock;