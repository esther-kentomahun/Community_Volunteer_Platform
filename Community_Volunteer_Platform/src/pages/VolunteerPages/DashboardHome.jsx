function DashboardHome() {
    return(
        <div>
              <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  mt-3">
          <div className="bg-white rounded-2xl lg:col-span-1 p-6 shadow-md"></div>
          <div className="bg-white rounded-2xl lg:col-span-2 p-6 shadow-md"></div>
        </div>
      </section>

      
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  mt-3">
          <div className="bg-white rounded-2xl lg:col-span-2 p-6 shadow-md"></div>
          <div className="bg-white rounded-2xl lg:col-span-1 p-6 shadow-md"></div>
        </div>
      </section>
        </div>
    )
}
export default DashboardHome