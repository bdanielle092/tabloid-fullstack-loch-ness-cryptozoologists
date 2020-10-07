﻿using System.Collections.Generic;

namespace Tabloid.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Tag> Tags { get; set; }
    }
}
