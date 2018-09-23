using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace facialRecognitionApi.Models
{
    public class tblUserFaceRecognitionDetail
    {
        [Key]
        public int id { get; set; }
        public string personGroupID { get; set; }
        public string personId { get; set; }
        public string img { get; set; }
        public Nullable<bool> FaceIdCreate { get; set; }
        //public string UserId { get; set; }
    }
}