using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models.Common
{
    public class ProfileDetails
    {
        [BsonElement("name")]
        public required string Name { get; set; }
        
        [BsonElement("location")]
        public Location? Location { get; set; } = null!;
        
        [BsonElement("contact_email")]
        public required string ContactEmail { get; set; } = null!;
        
        [BsonElement("contact_phone")]
        public string? ContactPhone { get; set; } = null!;
        
        [BsonElement("img")]
        public string? Img { get; set; } = null!;
    }
}