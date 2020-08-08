import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sanitization-example',
  templateUrl: './sanitization-example.component.html',
  styleUrls: ['./sanitization-example.component.css']
})
export class SanitizationExampleComponent implements OnInit {

  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  dangerousUrl;
  trustedUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  ngOnInit(): void {
  }
}
