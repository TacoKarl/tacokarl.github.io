function Factory () {
    return (<div>
        <div className="main-content">
            <h3>Factory Pattern</h3>
            <p>
                Factory method er et creational design pattern.
                Det bruges til at skabe objekter uden at specificere
                deres konkrete klasser. Ansvaret til at oprette
                objekter bliver flyttet til en separat factory
                class eller metode.<br/>
                Formålet er her at isolere logikken for oprettelsen
                af objekter og gøre koden fleksibel og let at udvide.
                Altså at bruge nogle SOLID principper. Det er
                meget nyttigt når man arbejder med komplekse opjekter
                eller gerne vil reducere afhængigheden af konkrete
                klasser.<br/>
                Hvornår kan vi så bruge Factory pattern?
            </p>
            <ul>
                <li>
                    Nå vi ikke vil, at klientkoden skal kende
                    til de konkrete klasser, der bruges til
                    at oprette objekter
                </li>
                <li>
                    Når logikken er kompleks for at oprette objekter
                    og skal gentages flere gange
                </li>
                <li>
                    Når der er behov for at udvide nye typer af
                    objekter uden at ændre eksisterende kode
                </li>
            </ul>
            <p>
                Et simpelt eksempel for Factory pattern, hvor vi har
                forskellige typer af køretøjer. I stedet for at klientkoden
                opretter disse objekter direkte, bruger vi en factory
                til at oprette dem.
            </p>
            <pre className={"my-pre"}><code>
{`public interface IVehicle
{
    void Drive();
}

public class Car : IVehicle
{
    public void Drive() => Console.WriteLine("Driving a car.");
}

public class Motorcycle : IVehicle
{
    public void Drive() => Console.WriteLine("Riding a motorcycle.");
}

// Factory Class
public class VehicleFactory
{
    public static IVehicle GetVehicle(string vehicleType)
    {
        return vehicleType switch
        {
            "Car" => new Car(),
            "Motorcycle" => new Motorcycle(),
            _ => throw new ArgumentException("Invalid vehicle type")
        };
    }
}

// Client Code
class Program
{
    static void Main(string[] args)
    {
        IVehicle car = VehicleFactory.GetVehicle("Car");
        car.Drive(); // Output: Driving a car.

        IVehicle motorcycle = VehicleFactory.GetVehicle("Motorcycle");
        motorcycle.Drive(); // Output: Riding a motorcycle.
    }
}`}
            </code></pre>
            <p>
                Interfacet definere hvilke funktioner vores køretøj
                har og som klientkoden kender til.<br/>
                De konkrete klasser implementerer interfacet. <br/>
                Vores Factory Klasse, sørger for at oprette objekter
                baseret på en streng som parameter.<br/>
                Klientkoden anmoder om et bestemt køretøj uden at
                kende til den konkrete implementation
            </p>
            <p>
                <em>
                    Dette understøtter S og O i <strong>SOLID</strong>,
                    da de konkrete klasser er ansvarlig for deres
                    egen funktionalitet og Factory klassen er
                    ansvarlig for at oprette objekterne. <br/>
                    O fordi nye typer kan defineres ved at udvide
                    Factory.logikken uden at ændre den eksisterende
                    kode.
                </em>
            </p>
        </div>

    </div>)
}

export default Factory;