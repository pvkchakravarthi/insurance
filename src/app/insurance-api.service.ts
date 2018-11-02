import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { promise } from 'protractor';
import { PolicyDetail } from './policy-detail';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {

  baseUrl = 'http://localhost:3000/';
  header = new HttpHeaders().set('content-type','application/json');

  constructor(private http: HttpClient) { }

  findAllAdvisors(): Observable<InsuranceAdvisor[]> {
    const advisorUrl = this.baseUrl+'advisors';
    return this.http.get<InsuranceAdvisor[]>(advisorUrl);
  }

  findAllAdvisorsAsPromise(): Promise<InsuranceAdvisor[]> {
    const advisorUrl = this.baseUrl+'advisors';
    return this.http.get<InsuranceAdvisor[]>(advisorUrl).toPromise();
  }

  findPolicyDetails(): Observable<PolicyDetail[]> {
    const lifeInsuranceUrl = this.baseUrl+'lifeInsurance';
    return this.http.get<PolicyDetail[]>(lifeInsuranceUrl);
  }

  addPolicy(policy:PolicyDetail): Observable<PolicyDetail> {
    const lifeInsuranceUrl = this.baseUrl+'lifeInsurance';
    return this.http.post<PolicyDetail>(lifeInsuranceUrl,policy,{headers: this.header});
  }

  updatePolicy(policy:PolicyDetail): Observable<PolicyDetail> {
    const updateUrl = this.baseUrl+'lifeInsurance/'+policy.id;
    return this.http.put<PolicyDetail>(updateUrl,policy,{headers: this.header});
  }
  removePolicy(policy:PolicyDetail): Observable<PolicyDetail> {
    const deleteUrl = this.baseUrl+'lifeInsurance/'+policy.id;
    return this.http.delete<PolicyDetail>(deleteUrl,{headers: this.header});
  }
}
