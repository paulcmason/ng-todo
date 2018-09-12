using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using heroes.Models;

namespace heroes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroesController : ControllerBase
    {

        private readonly HeroContext _context;

        public HeroesController(HeroContext context)
        {
            _context = context;

            if (_context.Heroes.Count() == 0)
            {
                // Create a new TodoItem if collection is empty,
                // which means you can't delete all TodoItems.
                _context.Heroes.Add(new Hero { Name = "Item1" });
                _context.SaveChanges();
            }
        }

        // GET api/heroes
        [HttpGet]
        public ActionResult<IEnumerable<Hero>> List()
        {
            return _context.Heroes.ToList();
        }

        // GET api/heroes/5
        [HttpGet("{id}", Name="GetHero")]
        public ActionResult<Hero> Get(int id)
        {
            return _context.Heroes.FirstOrDefault(h => h.Id == id);
        }

        // POST api/heroes
        [HttpPost]
        public IActionResult Create(Hero item)
        {
            _context.Heroes.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetHero", new { id = item.Id }, item);
        }

        // PUT api/heroes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/heroes/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = _context.Heroes.Find(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Heroes.Remove(todo);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
