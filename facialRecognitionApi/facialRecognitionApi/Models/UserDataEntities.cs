using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace facialRecognitionApi.Models
{
    public class UserDataEntities : DbContext
    {
        public UserDataEntities()
            : base("name=UserDataEntities")
        {
        }

        public DbSet<tblUserFaceRecognitionDetail> tblUserFaceRecognitionDetails { get; set; }
    }
}