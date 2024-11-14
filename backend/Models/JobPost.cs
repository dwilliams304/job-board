using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace JobBoardDotnetBackend.Models 
{
    public class JobPost
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("company"), BsonRepresentation(BsonType.ObjectId)]
        public string? Company { get; set; }

        [BsonElement("date_posted")]
        public DateTime? DatePosted { get; set; } = DateTime.Now;

        [BsonElement("title")]
        public required string Title { get; set; }

        [BsonElement("short_description")]
        public required string ShortDescription { get; set; }

        [BsonElement("salary")]
        public required int Salary { get; set; }

        [BsonElement("term")]
        public required string Term { get; set; }

        [BsonElement("location")]
        public required string Location { get; set; }

        [BsonElement("location_type")]
        public required string LocationType { get; set; }

        [BsonElement("experience")]
        public required string Experience { get; set; }
    }
}