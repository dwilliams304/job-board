using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace JobBoardDotnetBackend.Models
{
    public class Review
    {
        [BsonId, BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("date_posted")]
        public required DateTime DatePosted { get; set; }

        [BsonElement("title")]
        public required string Title { get; set; }

        [BsonElement("reviewer_name")]
        public string? ReviewerName { get; set; }

        [BsonElement("job_title")]
        public required string JobTitle { get; set; }

        [BsonElement("current_employee")]
        public required bool CurrentEmployee { get; set; }

        [BsonElement("pay_score")]
        public required int PayScore { get; set; }

        [BsonElement("culture_score")]
        public required int CultureScore { get; set; }

        [BsonElement("worklife_score")]
        public required int WorklifeScore { get; set; }

        [BsonElement("average_score"), BsonRepresentation(BsonType.Double)]
        public required decimal AverageScore { get; set; }

        [BsonElement("job_salary")]
        public required int JobSalary { get; set; }

        [BsonElement("comments")]
        public required string ReviewComments { get; set; }

        [BsonElement("recommends_company")]
        public required bool RecommendsCompany {  get; set; }
    }
}