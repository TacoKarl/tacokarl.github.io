import Pipeline from "./Img/pipeline.png"
function Futures () {
    return (<div>
        <div className="main-content">
            <h3>Futures og Pipelines</h3>
            <p>
                Futures og pipelines er to forskellige men relaterede teknikker
                til asynkron og parallel programmering..<br/>
                Pipeline pattern bruger parallelle tasks og concurrent queues
                (BlockingCollection{"<T>"})
                for at processere en sekvens af input værdier.
            </p>
                <h4>
                    Futures
                </h4>
                <p>
                    En future repræsenterer et resultat, der muligvis ikke
                    er tilgængeligt endnu, men vil bliver tilgængeligt
                    i fremtiden (Future). Den bruges ofter i asynkron programmering
                    til at håndtere opgaver, der tager tid. Eksempelvis
                    netværkskald eller I/O operationer.<br/>
                    Et eksempel i C#:
                </p>
                <pre className={"my-pre"}>
                    <code>
{`class Program
{
    static async Task Main(string[] args)
    {
        Console.WriteLine("Starting calculation...");

        // Opretter en Future, der beregner en værdi asynkront
        Task<int> futureResult = CalculateSumAsync(10, 20);

        // Du kan udføre anden kode, mens opgaven udføres
        Console.WriteLine("Doing other work...");

        // Afventer resultatet fra future
        int result = await futureResult;

        Console.WriteLine($"The result is: {result}");
    }

    static async Task<int> CalculateSumAsync(int a, int b)
    {
        // Simulerer en tidskrævende opgave
        await Task.Delay(2000);
        return a + b;
    }
}`}
                    </code>
                </pre>
            <p>
                Task{"<int>"} repræsenterer en "Future", der holder en værdi
                som bliver tilgængelig når beregningen er færdig.
                Programmet kan altså køre videre,
                imens vores Task{"<int>"} kører videre i baggrunden
            </p>
            <h4>
                Pipelines
            </h4>
            <p>
                En Pipeline bruges til at behandle en sekvens af data
                i trin, hvor hvert trin kan udføres parallelt. Det er meget
                nyttigt til data-streaming eller når man skal udføre flere
                transformationer på en datastrøm.<br/>
                Et eksempel kan ses i C# herunder:
            </p>
            <pre className={"my-pre"}><code>
{`class Program
{
    static async Task Main(string[] args)
    {
        var inputQueue = new BlockingCollection<string>();
        var outputQueue = new BlockingCollection<string>();

        var producerTask = Task.Run(() => Producer(inputQueue));
        var processingTask = Task.Run(() => ImageProcessor(inputQueue, outputQueue));
        var consumerTask = Task.Run(() => Consumer(outputQueue));

        await Task.WhenAll(producerTask, processingTask, consumerTask);
    }

    static void Producer(BlockingCollection<string> queue)
    {
        // Tilføjer "filnavne" som simulerer billeder
        for (int i = 1; i <= 5; i++)
        {
            string fileName = $"image_{i}.jpg";
            Console.WriteLine($"Added to queue: {fileName}");
            queue.Add(fileName);
            Thread.Sleep(500); // Simuler ventetid for at tilføje
        }
        queue.CompleteAdding();
    }

    static void ImageProcessor(BlockingCollection<string> inputQueue, BlockingCollection<string> outputQueue)
    {
        foreach (var file in inputQueue.GetConsumingEnumerable())
        {
            // Simuler billedbehandling
            Console.WriteLine($"Processing: {file}");
            string processedFile = $"processed_{file}";
            Thread.Sleep(1000); // Simuler behandlingstid
            outputQueue.Add(processedFile);
        }
        outputQueue.CompleteAdding();
    }

    static void Consumer(BlockingCollection<string> queue)
    {
        foreach (var file in queue.GetConsumingEnumerable())
        {
            // Simuler gem af det behandlede billede
            Console.WriteLine($"Saving: {file}");
            Thread.Sleep(500); // Simuler gemtid
        }
    }
}`}
            </code></pre>
            <p>
                <ul>
                    <li>
                        Producer genererer en liste af filnavne
                    </li>
                    <li>
                        Processor simulerer billedbehandling
                    </li>
                    <li>
                        Consumer gemmer de behandlede billeder
                    </li>
                </ul>
            </p>
        </div>
    </div>)
}

export default Futures;