import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    // Detect the browser or system language
    const browserLang = this.translate.getBrowserLang() || 'en'; // Set the default language to 'en' if no language is detected
    this.translate.setDefaultLang(browserLang); // Configure the default language
    this.translate.use(browserLang); // Use the detected or default language
  }

  // Function to switch language dynamically
  switchLanguage(language: string) {
    this.translate.use(language); // Update the application language based on the user's selection
  }
}
