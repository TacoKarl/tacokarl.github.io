import {useState} from "react";

abstract class Beverage {
    public prepareBeverage(): string[] {
        const steps = [];
        steps.push("Boiling water...");
        steps.push(this.brew());
        steps.push("Pouring into cup...");
        steps.push(this.addCondiments());
        return steps;
    }

    protected abstract brew(): string;
    protected abstract addCondiments(): string;
}

class Tea extends Beverage {
    protected brew(): string {
        return "Steeping the tea...";
    }

    protected addCondiments(): string {
        return "Adding lemon...";
    }
}

class Coffee extends Beverage {
    protected brew(): string {
        return "Brewing the coffee...";
    }
    protected addCondiments(): string {
        return "Adding milk and sugar...";
    }
}


function TeaOrCoffee() {
    const [beverageType, setBeverageType] = useState<string>(""); // For dropdown value
    const [steps, setSteps] = useState<string[]>([]);

    const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBeverage = event.target.value;
        setBeverageType(selectedBeverage);

        if (selectedBeverage === "tea") {
            const tea = new Tea();
            setSteps(tea.prepareBeverage());
        } else if (selectedBeverage === "coffee") {
            const coffee = new Coffee();
            setSteps(coffee.prepareBeverage());
        } else {
            setSteps([])
        }
    };


    return (
        <div className="main-content">
            <h3>Vælg din drik</h3>
            <label htmlFor="beverage-select">Vælg din drik:</label>
            <select
                id="beverage-select"
                value={beverageType}
                onChange={handleSelection}
            >
                <option value="">-- Vælg --</option>
                <option value="tea">Te</option>
                <option value="coffee">Kaffe</option>
            </select>
            {steps.length > 0 && (
                <div>
                    <h3>Preparing {beverageType === "tea" ? "Tea" : "Coffee"}:</h3>
                    <ul>
                        {steps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default TeaOrCoffee