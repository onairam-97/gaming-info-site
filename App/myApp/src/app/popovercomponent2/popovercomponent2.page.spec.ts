import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Popovercomponent2Page } from './popovercomponent2.page';

describe('Popovercomponent2Page', () => {
  let component: Popovercomponent2Page;
  let fixture: ComponentFixture<Popovercomponent2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popovercomponent2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Popovercomponent2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
