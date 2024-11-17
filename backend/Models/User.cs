using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models
{
    public class User 
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("first_name")]
        public required string FirstName { get; set; }

        [BsonElement("last_name")]
        public required string LastName { get; set; }

        [BsonElement("location")]
        public required string Location { get; set; }

        [BsonElement("email")]
        public required string Email { get; set; }

        [BsonElement("phone")]
        public required string Phone { get; set; }
    }
}