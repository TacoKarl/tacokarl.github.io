import TeaOrCoffee from "../../../../components/TeaOrCoffee.tsx";
import templateMethodImg from "./Img/templateMethod.png";
import templateMethodPseudoImg from "./Img/templateMethodPseudo.png";
import strategyPattern from "./Img/Strategy.png"
import strategyClass from "./Img/Strategy-class.png"
import Sorting from "../../../../components/Sorting.tsx";
function StrategyPattern() {
    return (<div>
        <div>
            <h4>Strategy Pattern</h4>
            <p>Strategy pattern giver nogle andre fordele frem for template method.
                Her bliver der brugt et Interface og en Navigator. Klasse diagrammet
                ser også en lille smule anderledes ud:</p>
            <div className="center">
                <img className={"page-img"} src={strategyPattern}/>
            </div>
            <p>Eksemplet kommer fra <a href={"https://refactoring.guru/design-patterns/strategy"}>Refactoring Guru</a> og
                tager udgangspunkt i en navigations app. Hver strategi bruger interfacet
                bygget til strategier. De implementerer hver især buildRoute(A, B)
                anderledes i forhold til hvordan deres strategi skal fungere,
                Selvom de får de samme argumenter. Det er altså behavioral design pattern.
            </p>
            <div className="center">
                <img className={"page-img"} src={strategyClass}/>
            </div>
            <p>Man kan implementere det sådan:
                (Taget ud fra bogen Agile Principles,
                Patterns, and Practices in C#)</p>
            <pre className={"my-pre"}><code>
{`public class ApplicationRunner
{
  private Application itsApplication = null;
  public ApplicationRunner(Application app)
  {
    itsApplication = app;
  }
  public void run ()
  {
    itsApplication.init();
    while(!itsApplication.Done())
      itsApplication.Idle();
    itsApplication.Cleanup();
  }
}
public interface Application
{
  void Init();
  void Idle();
  void Cleanup();
  bool Done();
}
public class MyStrategy : Application
{
  public bool isDone = false;
  
  public static void Main(string[] args)
  {
    (new ApplicationRunner(new MyStrategy())).run();
  }
  public void Init()
  {
    // Do some initialization
  }
  public void Idle()
  {
    // Do work
    isDone = true;
  }
  public void Cleanup()
  {
    Console.WriteLine("Cleaning up");
  }
  public bool Done()
  {
    return isDone;
  }
}`}
            </code></pre>
            <p>Herunder har jeg lavet en implementation af strategy Pattern
            med sorterings metoder:</p>
            <Sorting/>
            <p>Selvfølgelig kan man ikke se hvad der sker, og det bliver
                sorteret lige hurtigt, men det er bygget op strategy pattern
                sådan her:
            </p>
            <pre className={"my-pre"}><code>
{`interface SortingStrategy{ // Fælles strategi (interface)
    sort(data: number []): number[];
}
class BubbleSort implements SortingStrategy {
    sort(data: number[]): number[] {
        const arr = [...data]; // Kopier input-arrayet
        // Do Sort
        return arr;
    }
}
class SelectionSort implements SortingStrategy {
    sort(data: number[]): number[] {
        const arr = [...data]; // Kopier input-arrayet
        // Do Sort
        return arr;
    }
}
class QuickSort implements SortingStrategy {
    sort(data: number[]): number[] {
        if (data.length <= 1) {
            return data;
        }
        // Do Sort
        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}

class Sorter {
    private strategy: SortingStrategy;
    constructor(strategy: SortingStrategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy: SortingStrategy): void {
        this.strategy = strategy;
    }
    sort(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}`}
            </code></pre>
            <p>
                <em>
                    Strategy Pattern understøtter Open/Closed principle
                    i <strong>SOLID</strong> da du kan introducere nye strategier
                    uden at skulle ændre på kodekonteksten.<br/>
                    Sørger du for at hver strategi håndterer én specifik opgave
                    understøtter du også Single Responsibility Principle
                </em>
            </p>
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
            <pre className={"my-pre"}><code>
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
            <p>Nu er Te og Kaffe altid bundet til at være en drik. Strategy Pattern
            giver en anden mulighed. Et par klasse diagrammer kan ses herunder:</p>
            <img className={"page-img"} src={templateMethodImg} alt={"Template Method class diagram"} />
            <img className={"page-img"} src={templateMethodPseudoImg} alt={"Template Method class diagram Pseudo code"} />
            <p>
                <em>
                    Template method pattern understøtter S, L og O
                    i <strong>SOLID</strong>.<br/>
                    <ul>
                        <li>
                            S fordi en klasse kun har et ansvar
                            og de konkrete klasser implementere
                            den specifikke logik for den specifikke
                            klasse
                        </li>
                        <li>
                            O fordi vores template er åben for udvidelse
                            men lukket for ændring. De konkrete klasser
                            kan implementere og overskrive specifikke
                            metoder uden at ændre på vores template
                            eller den generelle struktur
                        </li>
                        <li>
                            L fordi vores konkrete klasser kan erstatte vores
                            template uden at ødelægge programmet. Det kan man
                            da de konkrete klasser kun implementerer de nødvendige
                            metoder uden at ændre på den overordnede struktur.
                        </li>
                    </ul>
                </em>
            </p>
            <StrategyPattern/>
            <h4>Konklusion</h4>
            <p>En konklusion på disse to patterns:<br/>
                <em>Template method</em> er nemmere at implementere
                men derimod også meget ufleksibel. <em>Strategy</em>
                er fleksibel, men du skal lave en ekstra klasse, instansiere
                et ekstra objekt, og koble dette objekt på systemet. Valget
                mellem <em>Template</em> og <em>Strategy</em> falder altså på
                om du har brug for fleksibiliteten fra <em>Strategy</em> eller om
                du kan nøjes med den simplere <em>Template</em>. <br/>
            </p>
        </div>

    </div>)
}

export default Strategy;