using JobBoardDotnetBackend.Models.Common;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace JobBoardDotnetBackend.Models
{
    public class ShortJobPosts
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("title")]
        public string? Title { get; set; }

        [BsonElement("location")]
        public Location? Location { get; set; }
    }

    public class Company
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public required string Name { get; set; }

        [BsonElement("current_employees")]
        public int? CurrentEmployees { get; set; }

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
        public required string About { get; set; }


        [BsonElement("job_posts")]
        public List<ShortJobPosts>? JobPosts { get; set; }


        [BsonElement("reviews")]
        public List<Review>? Reviews { get; set; }
    }
}
