﻿using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
   
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }
       
        public List<Category> GetAllCategories()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT Id, [Name] FROM Category ORDER BY [Name] ASC ";
                    var reader = cmd.ExecuteReader();
                    var categories = new List<Category>();
                    while (reader.Read())
                    {
                        var category = new Category()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name"))
                        };
                        categories.Add(category);
                    }
                    reader.Close();
                    return categories;
                    
                }
            }
        }

        public void AddCategory(Category category)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Category ([Name])
                                        OUTPUT INSERTED.ID
                                        VALUES (@name);";

                    cmd.Parameters.AddWithValue("@name", category.Name);

                    int id = (int)cmd.ExecuteScalar();

                    category.Id = id;
                }
            }
        }

        public void UpdateCategory(Category category)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE Category
                                        SET 
                                        [Name] = @name
                                        WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@name", category.Name);
                    cmd.Parameters.AddWithValue("@id", category.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
