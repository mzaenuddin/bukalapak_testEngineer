package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.firefox.firefoxDriver;

public class LoginBukalapak{
    public static void main(string[] args)
    {
        WebDriver driver = new firefoxFriver();
        driver.get("https//bukalapak.com");
        driver.findElement(By.id("user_session_username")).sendKeys("testEngineer@me.com");
        driver.findElement(By.id("user_session_password")).sendKeys("P@$$w0rd1234");
        driver.findElement(By.id("commit")).click();
    }
}
