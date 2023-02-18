import { useForm } from "react-hook-form";

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => console.log(data);

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("name", { required: true })} placeholder="Name" />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <input
            {...register("email", {
              required: true,
              validate: (value) =>
                value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
            })}
            placeholder="Email"
          />
          {errors.email && <span>Please enter a valid email</span>}
        </div>
        <div>
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
          ></textarea>
          {errors.message && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
