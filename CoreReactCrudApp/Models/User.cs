using System;
using System.Collections.Generic;

namespace CoreReactCrudApp.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PhoneNo { get; set; }
        public string Country { get; set; }
    }
}
