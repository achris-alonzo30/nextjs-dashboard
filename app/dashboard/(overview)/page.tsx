import { poppins } from "../../ui/fonts";
import { Card } from "../../ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { Suspense } from "react";
import CardWrapper from "@/app/ui/dashboard/cards";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardSkeleton } from "@/app/ui/skeletons";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Overview',
};
export default async function DashboardPage() {
    return (
        <main>
            <h1 className={`${poppins.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices  />
                </Suspense>
            </div>
        </main>
    );
}