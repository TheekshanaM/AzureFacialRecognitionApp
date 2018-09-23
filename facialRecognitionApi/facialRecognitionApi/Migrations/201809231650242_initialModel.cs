namespace facialRecognitionApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.tblUserFaceRecognitionDetails",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        personGroupID = c.String(),
                        personId = c.String(),
                        img = c.String(),
                        FaceIdCreate = c.Boolean(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.tblUserFaceRecognitionDetails");
        }
    }
}
