using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models.Common
{
    public class Meta
    {
        [BsonElement("created_at")]
        public DateTime? CreatedAt { get; set; }
        [BsonElement("updated_at")]
        public DateTime? UpdatedAt { get; set; }
        [BsonElement("status")]
        public string? Status { get; set; }
    }
}
