package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.firefox.firefoxDriver;

public class searchProductBukalapak{
    public static void main(string[] args)
    {
        WebDriver driver = new firefoxFriver();
        driver.get("https//bukalapak.com");
        driver.manager().window().maximize();

        driver.findElement(By.id("v-omnisearch__input")).sendKeys("sepatu Keren");
        driver.findElement(By.id("commit")).click();
    }
}

