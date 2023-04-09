import org.apache.spark.sql.SparkSession
import scalafx.application.JFXApp
import org.apache.spark.sql.types.StructType
import org.apache.spark.sql.types.StructField
import org.apache.spark.sql.types.StringType
import org.apache.spark.sql.types.DateType
import org.apache.spark.sql.types.DoubleType
import org.apache.spark.sql.Row
import org.apache.spark.sql.functions._

object Main extends JFXApp {
  val spark = SparkSession.builder().master("local[*]").appName("NOAA Data").getOrCreate()
  import spark.implicits._
  
  spark.sparkContext.setLogLevel("WARN")

  val tschema = StructType(Array(
    StructField("SessionNo", DoubleType),
    StructField("Para1", DoubleType),
    StructField("Para2", DoubleType),
    StructField("Para3", DoubleType)
  ))

  val data = spark.read.schema(tschema).csv("C:\\Projects\\review\\review\\invoice\\invoices.csv").cache()
  //delete csv invoices

  //add Para1, Para2, Para3 and group by SessionNo.
  val summ = data.withColumn("Summ", ($"Para1" + $"Para2" + $"Para3")/3).drop("Para1").drop("Para2").drop("Para3")
  val summ1 = summ.groupBy("SessionNo").agg(avg("Summ").as("Rating"))
  //limit rating to two decimal places
  val summ2 = summ1.withColumn("Rating", round($"Rating", 2))
  summ2.show()

  //make a csv and write summ2 into it
  val csv = summ2.coalesce(1).write.format("com.databricks.spark.csv").option("header", "true").save("C:\\Projects\\review\\review\\invoice\\invoicesreturn.csv")



}  