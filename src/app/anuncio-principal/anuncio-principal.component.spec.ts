import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioPrincipalComponent } from './anuncio-principal.component';

describe('AnuncioPrincipalComponent', () => {
  let component: AnuncioPrincipalComponent;
  let fixture: ComponentFixture<AnuncioPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnuncioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
