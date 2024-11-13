using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace JobBoardDotnetBackend.Models
{
    public class HelpArticle
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("last_update")]
        public required DateTime LastUpdated { get; set; }

        [BsonElement("title")]
        public required string Title { get; set; }

        [BsonElement("tag")]
        public required string Tag { get; set; }

        [BsonElement("for_employers")]
        public required bool ForEmployers { get; set; }
    }
}