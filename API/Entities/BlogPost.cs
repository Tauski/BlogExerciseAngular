using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Header { get; set;}
        public string SubHeader { get; set;}
        public string MetaText {get; set;}
        public string PhotoUrl { get; set; }
        
    }
}