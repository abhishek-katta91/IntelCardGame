using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace CardGameAPI.Helpers
{
    public class CardComparer : IComparer<string>
    {
        public int Compare(string previousCard, string currentCard)
        {
            Regex havingNumbers = new Regex(@"\d+");

            if (previousCard == null)
            {
                throw new ArgumentNullException(nameof(previousCard));
            }

            if (currentCard == null)
            {
                throw new ArgumentNullException(nameof(currentCard));
            }

            //Compare Suits
            var previousCardSuit = (CardSuit)Enum.Parse(typeof(CardSuit), previousCard[^1].ToString());
            var currentCardSuit = (CardSuit)Enum.Parse(typeof(CardSuit), currentCard[^1].ToString());

            var compareSuitsResult = CompareSuits(previousCardSuit, currentCardSuit);
            if (compareSuitsResult != 0)
            {
                return compareSuitsResult;
            }

            var previousCardNumber = previousCard.Substring(0, previousCard.Length - 1);
            var currentCardNumber = currentCard.Substring(0, currentCard.Length - 1);

            //Compare Numbers
            // run the regex on both strings
            var previousCardRegexResult = havingNumbers.Match(previousCardNumber);
            var currentCardRegexResult = havingNumbers.Match(currentCardNumber);

            if (previousCardRegexResult.Success && currentCardRegexResult.Success)
            {
                return CompareNumericCardNumbers(previousCardRegexResult.Value, currentCardRegexResult.Value, previousCardSuit);
            }

            if (previousCardRegexResult.Success && !currentCardRegexResult.Success)
            {
                return -1;
            }

            if (!previousCardRegexResult.Success && currentCardRegexResult.Success)
            {
                return 1;
            }

            return CompareAlphaCardNumbers((CardNumber)Enum.Parse(typeof(CardNumber), previousCardNumber),
                (CardNumber)Enum.Parse(typeof(CardNumber), currentCardNumber));
        }

        private int CompareSuits(CardSuit previousCardSuit, CardSuit currentCardSuit)
        {
            if (previousCardSuit < currentCardSuit) return -1;
            if (previousCardSuit > currentCardSuit) return 1;
            return 0;
        }

        private int CompareNumericCardNumbers(string previousCardNumber, string currentCardNumber, CardSuit cardSuit)
        {
            if (cardSuit == CardSuit.T)
            {
                if (previousCardNumber[0] < currentCardNumber[0]) return 1;
                if (previousCardNumber[0] > currentCardNumber[0]) return -1;
                return 0;
            }

            if (previousCardNumber.Length > currentCardNumber.Length) currentCardNumber = currentCardNumber.PadLeft(previousCardNumber.Length, '0');
            else if (currentCardNumber.Length > previousCardNumber.Length) previousCardNumber = previousCardNumber.PadLeft(currentCardNumber.Length, '0');

            for (int index = 0; index < previousCardNumber.Length; index++)
            {
                if (previousCardNumber[index] < currentCardNumber[index]) return -1;
                if (previousCardNumber[index] > currentCardNumber[index]) return 1;
            }

            return 0;
        }

        private int CompareAlphaCardNumbers(CardNumber previousCardNumber, CardNumber currentCardNumber)
        {
            if (previousCardNumber < currentCardNumber) return -1;
            if (previousCardNumber > currentCardNumber) return 1;
            return 0;
        }
    }

    public enum CardSuit
    {
        T,
        D,
        S,
        C,
        H
    }

    public enum CardNumber
    {
        J,
        Q,
        K,
        A,
        S,
        P,
        R
    }
}
