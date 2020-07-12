
package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.firefox.firefoxDriver;

public class RegisterBukalapak{
    public static void main(string[] args)
    {
        WebDriver driver = new firefoxFriver();
        driver.get("https//bukalapak.com");
        driver.manager().window().maximize();

        driver.findElement(By.id("https://www.bukalapak.com/c?from=nav_header")).sendKeys("TestEngineer");
        driver.findElement(By.id("email_or_phone")).sendKeys("TestEngineer@me.com");
        sel3.selectByIndex(3);
        driver.findElement(By.id("user_name")).sendKeys("testEngineer");
        driver.findElement(By.id("user_password")).sendKeys("1234");
        driver.findElement(By.id("user_password_confirmation")).sendKeys("testEngineer");
        driver.findElement(By.id("user_agreement")).sendKeys("1");
        driver.findElement(By.id("commit")).click();
    }
}


