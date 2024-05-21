 using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication5
{
    class Program
    {
        static void Main(string[] args)
        {
			// List of elements
            //string a;
           // a = new string();
            List<string> elements = new List<string> {elements};


            // New element to insert
            string newElement = "PHP";

            // Index to insert the new element
            int insertPosition = 2;

            // Insert the new element at the specified index
            elements.Insert(insertPosition, newElement);

            // Print the updated list
            Console.WriteLine("ALL ELEMENTS INPUTTED:");
            foreach (string element in elements)
            {
                Console.WriteLine(element);
            }

            // Print the details of the insertion
            Console.WriteLine("\nNEW ELEMENT: " + newElement);
            Console.WriteLine("POSITION: " + (insertPosition + 1));

            // Print the updated list after insertion
            Console.WriteLine("\nRESULTS");
            foreach (string element in elements)
            {
                Console.WriteLine(element);
            }
            Console.ReadKey();
			 }
       
    }
}
