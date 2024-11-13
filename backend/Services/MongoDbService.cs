using JobBoardDotnetBackend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace JobBoardDotnetBackend.Services
{
    public class MongoDbService
    {
        private readonly IMongoDatabase _database;

        public MongoDbService(IOptions<MongoDbSettings> settings)
        {
            MongoClient client = new MongoClient(settings.Value.ConnectionURI);
            _database = client.GetDatabase(settings.Value.DatabaseName);
        }

        public IMongoDatabase? Database => _database;

    }
}
