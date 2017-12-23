package RunnerPackage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\2017\\SELENIUM_PROJECTS\\SeleniumProjects\\Selenium_PilotProject_Calsoft\\FreeCrmBDDFramework\\src\\main\\java\\Features\\dealsmap.feature"
		//features = "D:\\2017\\SELENIUM_PROJECTS\\SeleniumProjects\\Selenium_PilotProject_Calsoft\\FreeCrmBDDFramework\\src\main\\java\Features\\Login.Feature"
		,glue={"StepDeffination"} // Where step deff are avaiable
		,format= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}
		,dryRun= true // It will tell user to missing steps - default value is false)
		,monochrome = false  // it means that the console output for the Cucumber test are much more readable
		,strict = true ,//encounters any undefined/pending steps then cucumber does fails the execution 
		
		tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}	
		
)	


public class TestRunner {
	
}

//ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest


