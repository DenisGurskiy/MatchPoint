import { Button } from "@/components/ui/button";

export default function Delete() {
  return (
    <div className="col-span-full fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray50 md:bg-gray100Primary"></div>
      <div className="bg-white z-50 rounded-[4px] md:p-[48px] px-[20px] py-[24px] mx-[20px]">
        <h2 className="text-center text-[22px] md:text-[32px] font-semibold leading-[1.2em] text-gray100Primary mb-[16px]">
          Delete Account
        </h2>
        <p className="text-center text-[16px] leading-[1.3em] font-normal text-gray50 mb-[24px]">
          Are you sure you want to delete your account? <br></br>This action
          cannot be undone.
        </p>
        <div className="flex gap-[16px]">
          <Button className="md:w-[222px]" variant="secondary">
            Delete
          </Button>
          <Button className="md:w-[222px]" variant="primary">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
