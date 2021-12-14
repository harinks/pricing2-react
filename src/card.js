export default function Card(props) {
    return <div class="col-lg-3 col-md-6">
        <div class="card text-center card-shadow on-hover border-0 mb-4">
            <div class="card-body font-14">
                {
                    props.data.type.map((obj) =>  {
                            if (obj.enable) {
                                return <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">{obj.name}</span>
                            }else {
                                return null
                            }
                        })
                }
                <h5 class="mt-3 mb-1 font-weight-medium">{props.data.plan}</h5>
                <h6 class="subtitle font-weight-normal">{props.data.teamsize}</h6>
                <div class="pricing my-3">
                    <sup>$</sup>
                    <span class="monthly display-5">{props.data.monthprize}</span>
                    <span class="yearly display-5">{props.data.yearprize}</span>
                    <small class="monthly">/mo</small>
                    <small class="yearly">/yr</small>
                    <span class="d-block">Save <span class="font-weight-medium">{props.data.saveprize}</span> a Year</span>
                </div>
                <ul class="list-inline">
                    {
                        props.data.value.map(obj => {
                            if(obj.feature==="&nbsp;"){
                                return <li class="d-block py-2">&nbsp;</li>
                            }else{
                                return <li class="d-block py-2">{obj.feature}</li>
                            }
                        })
                    }
                </ul>
                <div class="bottom-btn">
                    <a class={props.data.button} href="#f1"><span>Choose Plan</span></a>
                </div>
            </div>
        </div>
    </div>
}