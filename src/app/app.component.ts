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
    const browserLang = this.translate.getBrowserLang();

    // Check if the detected language is supported (fr or en)
    const supportedLang = browserLang === 'fr' || browserLang === 'en' ? browserLang : 'en';

    // Set and use the appropriate language
    this.translate.setDefaultLang(supportedLang);
    this.translate.use(supportedLang);
  }


  // Function to switch language dynamically
  switchLanguage(language: string) {
    this.translate.use(language); // Update the application language based on the user's selection
  }
}
