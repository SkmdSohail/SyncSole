import React from 'react'
import success1 from './fimages/success1.jpg'
import success2 from './fimages/success2.jpg'
import success3 from './fimages/success3.jpg'
import success4 from './fimages/success4.jpg'
import success5 from './fimages/success5.jpg'
import success6 from './fimages/success6.jpg'






const Success = () => {
    return (
        <>

            <div className="container" id='success'>

                <h1 className='text-center my-5'>Success Stories</h1>

                <div class="container text-center">
                    <div class="row">
                        <div class="col-sm">
                            
                        <div class="card">
                            <img class="card-img-top" src={success1} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Romeo & Juliet</h5>
                                <p>Thanks to SyncSole for connecting us</p>

                            </div>
                        </div>
                        </div>
                        <div class="col-sm">
                            
                        <div class="card">
                            <img class="card-img-top" src={success2} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Moon & Star</h5>
                                <p>Thank you for helping me find the love of my life.</p>

                            </div>
                        </div>
                        </div>


                        <div class="col-sm">
                            
                        <div class="card">
                            <img class="card-img-top" src={success3} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Water & Fish</h5>
                                <p>We are grateful for SyncSole as role in our story</p>

                            </div>
                        </div>
                        </div>


                        


                    </div>


                    <div class="row my-5">
                        <div class="col-sm">
                            
                        <div class="card">
                            <img class="card-img-top" src={success4} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Sky & Cloud</h5>
                                <p>I found my true Love. Thanks to SyncSole</p>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm">
                            
                        <div class="card">
                            <img class="card-img-top" src={success5} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Fire & Smoke</h5>
                                <p>Here ends my search for true love. Thanks to SyncSole</p>

                            </div>
                        </div>
                        </div>


                        <div class="col-sm">
                            
                        <div class="card">
                            <img class="card-img-top" src={success6} alt="Card cap" />
                            <div class="card-body">
                                <h5 class="card-title">Thunder & Lightning</h5>
                                <p>I found my soulmate on SyncSole. </p>

                            </div>
                        </div>
                        </div>


                        


                    </div>
                </div>






            </div>

        </>
    )
}

export default Success