import ObserverPic from "./Img/Observer.png"
import ObserverPic2 from "./Img/Observer2.png"
import ObserverPic3 from "./Img/ObserverStruc.png"
import Observe from "../../../../components/Observe.tsx";
import Clock from "../../../../components/Clock.tsx";
function Observer () {
    return (<div>
        <div className="main-content">
            <h3>GoF Observer</h3>
            <Clock/>
            <p>Observer Pattern er endnu et behavioral pattern.
                Her kan du opsætte en abonnements mekanisme for
                at notificere flere objekter omkring events der
                sker hos det objekt de observerer.
            </p>
            <h4>Problemet</h4>
            <p>Tænk på at du har to objekter: en <code>Kunde</code> og en <code>Butik</code>.
                Kunden er interesseret i et specielt produkt. Det kunne være den nye
                iPhone der skal komme på lager meget snart. For at finde ud af om produktet
                er kommet, skal kunden besøge butikken hver dag. Imens produktet stadig
                er under fragt, vil de fleste ture være forgæves.
            </p>
            <p>
                Butikken kunne derimod sende en e-Mail ud til alle deres kunder
                hver gang et nyt produkt bliver tilgængeligt. Dette ville spare
                nogle kunder turene, men de andre kunder der ikke er interesseret
                i det produkt i emailen, ville nok bliver sure og trætte.
            </p>
            <h4>Løsningen</h4>
            <p>
                Vi har en <code>Publisher</code> der skal notificere
                de kunder der er interesserede. Dem der gerne vil notificeres
                kaldes for <code>Subscribers</code>.
                Vi skal altså have en subscription mekanisme til vores
                <code>Publisher</code>, så man kan subscribe til denne.
                Det kan gøres meget simpelt. Man skal bruge et array til
                at gemme referencer til subscriber objekter og public metoder
                der tillader at man kan tilføje og fjerne <code>Subscribers</code>
            </p>
            <div className={"center"}>
                <img className={"page-img"} src={ObserverPic}/>
                <img className={"page-img"} src={ObserverPic2}/>
            </div>
            <p>
                Den egentlige struktur kan ses herunder:
            </p>
            <div className={"center"}>
                <img className={"page-img"} src={ObserverPic3}/>
            </div>
            <Observe/>
            <p>Hvordan kan man så skrive det i C#*?</p>
            <pre className={"my-pre"}><code className={"my-code"}>
{`public interface Observer
{
  void Update();
}
public class Subject 
{
  private ArrayList itsObservers = new ArrayList();
  public void NotifyObservers()
  {
    foreach(Observer observer in itsObservers)
      observer.Update();
  }
  public void RegisterObserver(Observer observer)
  {
    itsObservers.Add(observer);
  }
}
public interface TimeSource
{
  int GetHours();
  int GetMinutes();
  int GetSeconds();
}
private class MockTimeSource : Subject, Timesource
{
  private int itsHours;
  private int itsMinutes;
  private int itsSeconds;
  public void SetTime(int hours, int mins, int secs)
  {
    itsHours = hours;
    itsMinutes = mins;
    itsSeconds = secs;
    NotifyObservers();
  }
  public int GetHours()
  {
    return itsHours;
  }
  public int GetMinutes()
  {
    return itsMinutes;
  }
  public int GetSeconds()
  {
    return itsSeconds;
  }
}
public class MockTimeSink : Observer
{
  private int itsHours;
  private int itsMinutes;
  private int itsSeconds;
  private TimeSource itsSource;
  public MockTimeSink(TimeSource source)
  {
    itsSource = source;
  }
  public int GetHours()
  {
    return itsHours;
  }
  public int GetMinutes()
  {
    return itsMinutes;
  }
  public int GetSeconds()
  {
    return itsSeconds;
  }
  public void Update()
  {
    itsHours = itsSource.GetHours();
    itsMinutes = itsSource.GetMinutes();
    itsSeconds = itsSource.GetSeconds();
  }
}`}
            </code></pre>
            <p>
                Her har vi vores <code>Observer interface</code>
                der bare en en <code>Update()</code> metode. Det er
                altså vores <code>Subscriber</code>. <code>Subject</code> er
                så vores <code>Publisher</code> som har en liste
                af Observers. Den har en metode for at notificere og tilføje
                Observers.
                Så har vi også vores <code>TimeSource</code> hvor en Mock
                bliver lavet som implementerer
                både <code>TimeSource</code> og <code>Subject</code>. Det
                er altså vores Publisher. <code>MockTimeSink</code> er
                så vores Subscriber da den implementerer Observer.
                Tilføjer du denne til <code>MockTimeSource</code>, vil den
                blive notificeret hver gang <code>SetTime()</code> bliver
                kaldt.
            </p>
        </div>

    </div>)
}

export default Observer;