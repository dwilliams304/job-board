using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models
{
    public class Company
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public required string Name { get; set; }

        [BsonElement("current_employees")]
        public required int CurrentEmployees { get; set; }

        [BsonElement("currently_hiring")]
        public required bool CurrentlyHiring { get; set; }

        [BsonElement("img")]
        public required string Img { get; set; }

        [BsonElement("address")]
        public required string Address { get; set; }

        [BsonElement("email")]
        public required string Email { get; set; }

        [BsonElement("phone")]
        public required string Phone { get; set; }

        [BsonElement("about")]
        public string? About { get; set; }

        [BsonElement("job_postings"), BsonRepresentation(BsonType.ObjectId)]
        public List<string>? JobPosts { get; set; }

        [BsonElement("reviews"), BsonRepresentation(BsonType.ObjectId)]
        public List<string>? Reviews { get; set; }
    }
}
