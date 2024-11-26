using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models.Common
{
    public class ApplicationQuestion
    {
        [BsonElement("question")]
        public string? Question { get; set; } = null!;
        [BsonElement("required")]
        public bool Required { get; set; } = false;
        [BsonElement("type")]
        public string Type { get; set; } = "Text";
        [BsonElement("options")]
        public List<string>? Options { get; set; } = null!;
    }
}
