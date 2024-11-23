using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models.Common
{
    public class ApplicationQuestion
    {
        [BsonElement("question")]
        public required string Question { get; set; }
        [BsonElement("answer")]
        public string? Answer { get; set; } = null!;
    }
}
