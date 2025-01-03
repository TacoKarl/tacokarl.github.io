import TeaOrCoffee from "../../../../components/TeaOrCoffee.tsx";

function StrategyPattern() {
    return (<div>
        <div>
            <h4>Strategy Pattern</h4>
        </div>
    </div>)
}
function Strategy () {
    return (<div>
        <div className="main-content">
            <h3>Strategy pattern og Template method pattern</h3>
            <p>Lad os starte med <strong>Template method pattern</strong>.
            Det kan man læse om i <strong>Kapitel 8</strong> i <strong>HeadFirst</strong>
            <br/>Der er meget kode der kan genbruges. I bogen bruges eksemplet
            med at lave kaffe og te. De to ting minder meget om hinanden
            og derfor bliver koden duplikeret hvis du lave to klasser.
            <br/>I stedet for at lave to klasser kan man altså lave en template
            klasse. Her gør man brug af en abstract klasse. et eksempel kan ses herunder:</p>
            <pre><code>
{`abstract class Beverage {
  public prepareBeverage(): void {
      this.boilWater();
      this.brew();
      this.pourInCup();
      this.addCondiments();
  }
    
  private boilWater(): void {
      console.log("Boiling water...");
  }
    
  private pourInCup(): void {
     console.log("Pouring into the cup...");
  }
    
  protected abstract brew(): void;
  protected abstract addCondiments(): void;
}
class Tea : Beverage
{
  protected override void Brew()
  {
     Console.WriteLine("Steeping the tea...");
   }
   protected override void AddCondiments()
  {
     Console.WriteLine("Adding lemon...");
  }
}

// Concrete class for Coffee
class Coffee : Beverage
{
  protected override void Brew()
  {
     Console.WriteLine("Brewing the coffee...");
  }

  protected override void AddCondiments()
  {
    Console.WriteLine("Adding milk and sugar...");
  }
}
`}
            </code>
            </pre>
            <p>Her kan vi se at te og kaffe kun overskriver de funktioner
            der gør dem forskellige. Den abstrakte klasse definere algoritmen
            og funktions navnene, hvor underklasserne overskriver dem der skal
            overskrives. Som bruger kender man kun til <em>PrepareRecipe</em>
            og skal derfor ikke tænke på implementationen, men kun om man vil
            have kaffe eller te.</p>
            <TeaOrCoffee/>
            <StrategyPattern/>
        </div>

    </div>)
}

export default Strategy;