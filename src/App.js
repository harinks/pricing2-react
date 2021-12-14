import './App.css';
import Card from './card';

function App() {
  let pricelist = [
    {
      plan: "BASIC",
      type: [{ name: "Popular", enable: false }],
      teamsize: "For Team of 3-5 Members",
      monthprize: "28",
      yearprize: "240",
      saveprize: "$20",
      value: [{ feature: "Perfect of Small Team" },
      { feature: "Unlimited Invoices" },
      { feature: "Project Management" },
      { feature: "&nbsp;" },
      { feature: "&nbsp;" }],
      button: "btn btn-success-gradiant btn-md text-white btn-block"
    },
    {
      plan: "INTERMEDIATE",
      type: [{ name: "Popular", enable: true }],
      teamsize: "For Team of 5-10 Members",
      monthprize: "39",
      yearprize: "400",
      saveprize: "$30",
      value: [{ feature: "Perfect of Small Team" },
      { feature: "Unlimited Invoices" },
      { feature: "Project Management" },
      { feature: "Team Management" },
      { feature: "&nbsp;" }],
      button: "btn btn-danger-gradiant btn-md text-white btn-block"
    },
    {
      plan: "HIGH CLASS",
      type: [{ name: "Popular", enable: false }],
      teamsize: "For Team of 10-25 Members",
      monthprize: "58",
      yearprize: "600",
      saveprize: "$50",
      value: [{ feature: "Perfect of Small Team" },
      { feature: "Unlimited Invoices" },
      { feature: "Project Management" },
      { feature: "Team Management" },
      { feature: "Time Tracking" }],
      button: "btn btn-success-gradiant btn-md text-white btn-block"
    },
    {
      plan: "SUPREME",
      type: [{ name: "Popular", enable: false }],
      teamsize: "For Team of 25-100 Members",
      monthprize: "99",
      yearprize: "1000",
      saveprize: "$80",
      value: [{ feature: "Perfect of Small Team" },
      { feature: "Unlimited Invoices" },
      { feature: "Project Management" },
      { feature: "Team Management" },
      { feature: "Time Tracking" }],
      button: "btn btn-success-gradiant btn-md text-white btn-block"
    }
  ]

  
  return (
    <div class="pricing1 py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <h3 class="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
            <h6 class="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
            <div class="switcher-box mt-4 d-flex align-items-center justify-content-center">
              <span class="font-14 font-weight-medium">MONTHLY</span>
              <div class="onoffswitch position-relative mx-2">
                <input type="checkbox" name="onoffswitch1" class="onoffswitch-checkbox d-none" id="myonoffswitch1" />
                <label class="onoffswitch-label d-block overflow-hidden" for="myonoffswitch1">
                  <span class="onoffswitch-inner d-block"></span>
                  <span class="onoffswitch-switch d-block bg-white position-absolute"></span>
                </label>
              </div>
              <span class="font-14 font-weight-medium">YEARLY</span>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          {
            pricelist.map(obj => <Card data={obj}></Card>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
