using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models
{
    public class Company
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public string? Name { get; set; }

        [BsonElement("current_employees")]
        public int? CurrentEmployees { get; set; }

        [BsonElement("currently_hiring")]
        public bool? CurrentlyHiring { get; set; }

        [BsonElement("img")]
        public string? Img { get; set; }

        [BsonElement("address")]
        public string? Address { get; set; }

        [BsonElement("email")]
        public string? Email { get; set; }

        [BsonElement("phone")]
        public string? Phone { get; set; }

        [BsonElement("about")]
        public string? About { get; set; }

        [BsonElement("job_postings"), BsonRepresentation(BsonType.ObjectId)]
        public List<string>? JobPosts { get; set; }

        [BsonElement("reviews"), BsonRepresentation(BsonType.ObjectId)]
        public List<string>? Reviews { get; set; }
    }
}
