import React, { useState, useEffect } from "react";

interface Observer {
    update(data: string): void;
}

interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

class ObservableText implements Subject {
    private observers: Observer[] = [];
    private text: string = "";

    setText(newText: string): void {
        this.text = newText;
        this.notifyObservers();
    }

    getText(): string {
        return this.text;
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.text));
    }
}

const TextDisplay: React.FC<{ observable: ObservableText }> = ({ observable }) => {
    const [text, setText] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        if (isSubscribed) {
            // Opret observer og tilføj den til observable
            const observer: Observer = {
                update: (data: string) => setText(data),
            };
            observable.addObserver(observer);

            // Fjern observer ved unmount
            return () => {
                observable.removeObserver(observer);
            };
        }
    }, [isSubscribed, observable]);

    const toggleSubscribtion = () => {
        setIsSubscribed((prev) => !prev);
    }

    return (
        <div className={"center"}>
            <p>{isSubscribed ? text : "Not Subscribed"}</p>
            <button
                onClick={toggleSubscribtion}>
                {isSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
        </div>)
};

// Hovedkomponent
const Observe: React.FC = () => {
    const observableText = new ObservableText();

    return(
        <div>
            <input
                type={"text"}
                id={"textInput"}
                placeholder={"Skriv noget her..."}
                onChange={(e) => observableText.setText(e.target.value)}
            />
                <TextDisplay observable={observableText} />
                <TextDisplay observable={observableText} />

        </div>
    )
}

export default Observe;