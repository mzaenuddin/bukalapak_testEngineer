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

        driver.findElement(By.id("user_name")).sendKeys("TestEngineer");
        driver.findElement(By.id("email_or_phone")).sendKeys("TestEngineer@me.com");
        driver.findElement(By.id("user_gender_laki-laki")).sendKeys("1");
        radio1 = driver.findElement(By.id("user_gender_laki"));							
        radio1.click()
        driver.findElement(By.id("user_name")).sendKeys("testEngineer");
        driver.findElement(By.id("user_password")).sendKeys("P@$$w0rd1234");
        driver.findElement(By.id("user_password_confirmation")).sendKeys("P@$$w0rd1234");
        driver.findElement(By.id("user_agreement")).click();
        driver.findElement(By.id("commit")).click();
    }
}
