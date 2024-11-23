using JobBoardDotnetBackend.Models.Common;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models
{
    public class User 
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("email")]
        public required string Email { get; set; }

        [BsonElement("password")]
        public required string PasswordHash { get; set; }

        [BsonElement("user_type")]
        public required string UserType { get; set; } //Company? Job Seeker?

        [BsonElement("profile_details")]
        public required ProfileDetails ProfileDetails { get; set; }

        //META
        [BsonElement("created_at")]
        public DateTime? CreatedAt { get; set; } = DateTime.Now;
        [BsonElement("updated_at")]
        public DateTime? UpdatedAt { get; set; }

    }


}