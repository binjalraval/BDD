package StepDefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class RegisterStepDefination {

    WebDriver driver;


    @Given("^User open the browser$")
    public void user_open_the_browser()  {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://demo.nopcommerce.com/");
    }

    @When("^User enter URL$")
    public void user_enter_URL()  {
        driver.get("https://demo.nopcommerce.com/");
           }

    @Then("^User on the home page$")
    public void user_on_the_home_page() {
        driver.findElement(By.className("class=\"ico-register\"")).click();
    }
}
