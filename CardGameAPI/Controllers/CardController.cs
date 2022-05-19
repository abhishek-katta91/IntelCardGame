using CardGameAPI.Helpers;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardGameAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
    {
        private readonly ILogger<CardController> _logger;
        public CardController(ILogger<CardController> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet]
        [Route("sort")]
        [EnableCors("AllowOrigin")]
        public async Task<ActionResult> SortCards(string cardValues)
        {
            _logger.LogInformation("Card Controller is called.");
            List<string> cardList = new List<string>();
            if (cardValues != null)
            {
                cardList = cardValues.Split(',').ToList();
            }

            cardList = cardList.OrderBy(card => card, new CardComparer()).ToList();


            return Ok(cardList);
        }
    }
}
