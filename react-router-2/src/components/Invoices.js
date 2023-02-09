import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HomePage from './HomePage'
import Invoice from './Invoice'
import NewInvoice from './NewInvoice'

export default function Invoices() {
    return (
        <div>
            <section className="">
                <div className="title text-center">
                    <h1 className="mb-3">Invoices</h1>
                    <Link to={'new'} className="d-inline-block mb-5" href="">
                        Create new invoice
                    </Link>
                </div>
                <div className="body d-flex align-items-center">
                    <div className="invoice border-end">
                        <Link to={'1'} className="d-block p-3" href="">
                            Google
                        </Link>
                        <Link to={'2'} className="d-block p-3" href="">
                            Apple
                        </Link>
                    </div>
                    <Outlet />
                    {/* Create Invoice */}
                    {/* <NewInvoice /> */}
                    {/* Invoice 1 */}
                    {/* <h3 className="p-3">Invoice #1 for Google</h3> */}
                    {/* Invoice 2 */}
                    {/* <h3 className="p-3">Invoice #2 for Apple</h3> */}
                </div>
            </section>
        </div>
    )
}
