using System;

public enum ProblemType
{
    Math,
    String,
    Array
}

public class ProgrammingProblemGenerator
{
    private Random random;

    public ProgrammingProblemGenerator()
    {
        random = new Random();
    }

    public (string, string) GenerateProblem()
    {
        ProblemType problemType = (ProblemType)random.Next(Enum.GetNames(typeof(ProblemType)).Length);

        switch (problemType)
        {
            case ProblemType.Math:
                return GenerateMathProblem();
            case ProblemType.String:
                return GenerateStringProblem();
            case ProblemType.Array:
                return GenerateArrayProblem();
            default:
                return ("Не удалось сгенерировать задачу.", "");
        }
    }

    private (string, string) GenerateMathProblem()
    {
        int a = random.Next(1, 101);
        int b = random.Next(1, 101);
        int answer = a + b;
        return ($"Напишите программу, которая складывает {a} и {b}.", answer.ToString());
    }

    private (string, string) GenerateStringProblem()
    {
        string[] words = { "apple", "banana", "cherry", "grape", "orange" };
        string word = words[random.Next(words.Length)];
        int answer = word.Length;
        return ($"Напишите программу, которая выводит длину строки \"{word}\".", answer.ToString());
    }

    private (string, string) GenerateArrayProblem()
    {
        int size = random.Next(3, 11);
        int[] array = new int[size];
        int sum = 0;
        for (int i = 0; i < size; i++)
        {
            array[i] = random.Next(1, 101);
            sum += array[i];
        }
        return ($"Напишите программу, которая находит сумму элементов массива: {string.Join(", ", array)}.", sum.ToString());
    }

    public bool CheckAnswer(string userAnswer, string correctAnswer)
    {
        return userAnswer.Trim().ToLower() == correctAnswer.Trim().ToLower();
    }
}

class Program
{
    static void Main(string[] args)
    {
        ProgrammingProblemGenerator generator = new ProgrammingProblemGenerator();
        (string problem, string correctAnswer) = generator.GenerateProblem();
        Console.WriteLine(problem);

        Console.Write("Введите ваш ответ: ");
        string userAnswer = Console.ReadLine();

        bool isCorrect = generator.CheckAnswer(userAnswer, correctAnswer);
        if (isCorrect)
        {
            Console.WriteLine("Правильно!");
        }
        else
        {
            Console.WriteLine($"Неправильно. Правильный ответ: {correctAnswer}");
        }
    }
}
